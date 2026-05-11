"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  lat: number;
  lng: number;
  zoom?: number;
  height?: number | string;
};

export default function MapBox({ lat, lng, zoom = 16, height = 420 }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);
  const overlayRef = useRef<any>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!mapRef.current || !key) return;

    let scriptEl: HTMLScriptElement | null = null;

    const init = () => {
      const google = (window as any).google;
      if (!google) return;

      const center = new google.maps.LatLng(lat, lng);

      const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
        center,
        zoom,
        disableDefaultUI: true,
        gestureHandling: "greedy",
        styles: [
          { elementType: "geometry", stylers: [{ color: "#0f1720" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#9aa4ab" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#0b0b0b" }] },
          { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#9aa4ab" }] },
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#071f1b" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#121212" }] },
          { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#072a14" }] },
          { featureType: "transit", elementType: "geometry", stylers: [{ color: "#121212" }] },
          { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#7a7a7a" }] }
        ]
      });

      mapInstance.current = map;

      // Custom anchored overlay (halo + pin)
      function CustomOverlay(position: any, mapObj: any) {
        this.position = position;
        this.map = mapObj;
        this.div = null;
        this.setMap(mapObj);
      }

      (CustomOverlay as any).prototype = new google.maps.OverlayView();

      (CustomOverlay as any).prototype.onAdd = function () {
        const div = document.createElement("div");
        div.className = "gp-marker-wrapper";
        div.innerHTML = `<div class="gp-halo"></div><div class="gp-pin"></div>`;
        this.div = div;
        this.getPanes().overlayMouseTarget.appendChild(div);
      };

      (CustomOverlay as any).prototype.draw = function () {
        const overlayProjection = this.getProjection();
        const pos = overlayProjection.fromLatLngToDivPixel(this.position);
        if (this.div) {
          this.div.style.left = pos.x + "px";
          this.div.style.top = pos.y + "px";
        }
      };

      (CustomOverlay as any).prototype.onRemove = function () {
        if (this.div && this.div.parentNode) this.div.parentNode.removeChild(this.div);
        this.div = null;
      };

      overlayRef.current = new (CustomOverlay as any)(center, map);
    };

    if (!(window as any).google) {
      scriptEl = document.createElement("script");
      scriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
      scriptEl.async = true;
      scriptEl.defer = true;
      scriptEl.onload = init;
      document.head.appendChild(scriptEl);
    } else {
      init();
    }

    return () => {
      if (overlayRef.current && overlayRef.current.setMap) {
        overlayRef.current.setMap(null);
        overlayRef.current = null;
      }
      if (mapInstance.current) {
        mapInstance.current = null;
      }
      if (scriptEl && scriptEl.parentNode) scriptEl.parentNode.removeChild(scriptEl);
    };
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height
      }}
      className="rounded-sm"
    />
  );
}
