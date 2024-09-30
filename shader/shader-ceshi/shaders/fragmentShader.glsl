// shaders/fragmentShader.glsl
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    // vec3 color = vec3(1.0, 0.0, 0.0);
    gl_FragColor = vec4(uv, 0.0, 1.0);
}