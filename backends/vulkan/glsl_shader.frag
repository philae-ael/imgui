#version 450 core
layout(location = 0) out vec4 fColor;

layout(set=0, binding=0) uniform sampler2D sTexture;

layout(location = 0) in struct {
    vec4 Color;
    vec2 UV;
} In;

void main()
{
    fColor = In.Color * texture(sTexture, In.UV.st);
    fColor.r = pow(fColor.r, 2.2);
    fColor.g = pow(fColor.g, 2.2);
    fColor.b = pow(fColor.b, 2.2);
}
