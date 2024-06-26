const colors = {
  border: {
    DEFAULT: "hsl(var(--border))",
  },
  divider: "var(--border-divider)",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "var(--primary-foreground)",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "var(--secondary-foreground)",
    icon: "var(--secondary-icon)",
    button: {
      background: "var(--secondary-button-background)",
    },
  },
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  popover: {
    DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
  },
  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
    background: {
      flat: "var(--card-background-flat)",
    },
  },
  overlay: "hsl(var(--overlay) / <alpha-value>)",
  hover: {
    banner: "rgb(242 242 242 / <alpha-value>)",
    item: {
      DEFAULT: "var(--hover-item)",
      radio: "var(--hover-item-radio)",
    },
    icon: {
      button: "var(--hover-icon-button)",
    },
  },
  disabled: {
    button: {
      text: "var(--disabled-button-text)",
    },
  },
  comment: {
    background: "var(--comment-background)",
  },
};

export default colors;
