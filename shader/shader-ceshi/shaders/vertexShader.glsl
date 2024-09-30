// shaders/vertexShader.glsl
varying vec2 vUv;
uniform float iTime;

vec3 distort(vec3 p) {
    p.x += sin(p.y * 10.0 + iTime) * 0.25;              //扭曲x轴
    
    return p;
}

void main() {
    vec3 p = position;
    p = distort(p);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    vUv = uv;
}