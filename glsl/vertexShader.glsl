attribute float size;
attribute vec3 color;
attribute float fade;

varying vec3 vColor;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
		// gl_PointSize = size * 0.5;
		// gl_PointSize = size * 1.0;
		// gl_Position = projectionMatrix * mvPosition;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
		// gl_PointSize = size * 100.0 * viewPosition.z;    //设置点的大小

    gl_PointSize = size * 0.4 * (1.0 / (-viewPosition.z * 0.1));

    gl_Position = projectionMatrix * mvPosition;

}