export const setInitialMapZoom=() =>{
    var viewportWidth = window.innerWidth;
    var mapZoom;
    if (viewportWidth <= [767]) {
      mapZoom = [4];
    } if (viewportWidth >= [768]) {
      mapZoom = [4.5];
    } if (viewportWidth >= [1600]) {
      mapZoom = [5];
    }
    return mapZoom;
  }

 export const setDragging = () => {
    var viewportWidth = window.innerWidth;
    var dragging;
    if (viewportWidth <= [767]) {
      dragging = false;
    } if (viewportWidth >= [768]) {
      dragging = true;
    }
    return dragging;
  }


  export const  setLayerControl=() =>{
    var viewportWidth = window.innerWidth;
    var mapLayersCollapse;
    if (viewportWidth <= [767]) {
      mapLayersCollapse = true;
    } else {
      mapLayersCollapse= false;
    } 
    return mapLayersCollapse;
  }
