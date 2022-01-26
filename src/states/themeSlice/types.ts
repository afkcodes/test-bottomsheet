export interface BackgroundColor {
  backgroundColor: string;
}
export interface Color {
  color: string;
}

export interface DarkOrLight {
  backgroundColor: BackgroundColor;
  color: Color;
}

export interface ThemeSliceType {
  theme: string;
  dark: DarkOrLight;
  light: DarkOrLight;
  toggleTheme: () => void;
}
