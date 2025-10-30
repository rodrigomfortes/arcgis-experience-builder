// Declarações de tipos para Google Maps API
declare namespace google.maps {
  class LatLng {
    constructor(lat: number, lng: number);
    lat(): number;
    lng(): number;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  class StreetViewPanorama {
    constructor(container: HTMLElement, opts?: StreetViewPanoramaOptions);
    setPosition(latLng: LatLng | LatLngLiteral): void;
    setVisible(visible: boolean): void;
    getPosition(): LatLng;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }

  interface StreetViewPanoramaOptions {
    visible?: boolean;
    addressControl?: boolean;
    linksControl?: boolean;
    panControl?: boolean;
    zoomControl?: boolean;
    enableCloseButton?: boolean;
    fullscreenControl?: boolean;
  }

  class StreetViewService {
    getPanorama(request: StreetViewPanoramaRequest, callback: (data: StreetViewPanoramaData | null, status: StreetViewStatus) => void): void;
  }

  interface StreetViewPanoramaRequest {
    location: LatLng | LatLngLiteral;
    radius?: number;
  }

  interface StreetViewPanoramaData {
    location: StreetViewLocation;
  }

  interface StreetViewLocation {
    latLng: LatLng;
  }

  enum StreetViewStatus {
    OK = 'OK',
    ZERO_RESULTS = 'ZERO_RESULTS',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR'
  }

  interface MapsEventListener {
    remove(): void;
  }
}

// Extend Window interface
interface Window {
  google: {
    maps: typeof google.maps;
  };
  gm_authFailure?: () => void;
}
