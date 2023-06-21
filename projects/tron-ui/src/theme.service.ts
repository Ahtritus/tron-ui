import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable()
export class ThemeService {
  private renderer: Renderer2;
  defaultTheme = 'tron'; // Set your desired default theme here

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);;
  }

  setTheme(themeName: string): void {
    const theme = themeName || this.defaultTheme;
    this.renderer.setAttribute(document.documentElement, 'data-theme', theme);
  }
}

  