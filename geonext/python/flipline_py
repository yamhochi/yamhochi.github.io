layer = qgis.utils.iface.mapCanvas().currentLayer()
for feature in layer.selectedFeatures():
   geom = feature.geometry()
   nodes = geom.asPolyline()
   nodes.reverse() 
   newgeom = QgsGeometry.fromPolyline(nodes)
   layer.changeGeometry(feature.id(),newgeom)
