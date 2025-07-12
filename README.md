# 🎨 Modern React Accordion Component

<div align="center">
A beautiful, accessible, and highly customizable accordion component for React applications
</div>
## ✨ Features

- 🎨 **5 Beautiful Variants**: Default, Gradient, Glass, Neon, and Minimal styles
- ♿ **Full Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- 📱 **Responsive Design**: Adapts perfectly to all screen sizes
- 🌙 **Dark Mode**: Built-in dark mode support
- ⚡ **Smooth Animations**: Powered by Framer Motion with advanced easing curves
- 🎯 **TypeScript**: Full type safety and IntelliSense support
- 🎪 **Customizable**: Extensive props for styling and behavior customization
- 🚀 **Performance**: Optimized animations and minimal re-renders
- 🔒 **Lock State**: Support for disabled/locked accordions
- 📦 **Zero Dependencies**: No external CSS files required

## 🎭 Demo

### Default Variant

```tsx
<Accordion
  title="Getting Started"
  icon={<Sparkles className="w-5 h-5" />}
  defaultIsOpen
>
  <p>Your content here...</p>
</Accordion>
```

### Gradient Variant

```tsx
<Accordion title="Beautiful Gradients" variant="gradient" size="lg">
  <p>Stunning gradient backgrounds with smooth transitions</p>
</Accordion>
```

### Glass Variant (Glassmorphism)

```tsx
<Accordion title="Glassmorphism Effect" variant="glass">
  <p>Modern glass effect with backdrop blur</p>
</Accordion>
```

### Neon Variant (Cyberpunk Style)

```tsx
<Accordion title="Cyberpunk Theme" variant="neon">
  <p>Futuristic neon styling with glowing effects</p>
</Accordion>
```

### Minimal Variant

```tsx
<Accordion title="Clean & Simple" variant="minimal">
  <p>Clean design focused on content</p>
</Accordion>
```

## 🚀 Installation

### Prerequisites

- React 18.3.1 or higher
- Node.js 16 or higher

### Install Dependencies

```bash

# Install the required packages

npm install framer-motion lucide-react clsx

# Install Tailwind CSS (if not already installed)

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Setup Tailwind CSS

Add to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
};
```

Add to your CSS file:

```css
@import "tailwindcss";
```

## 📖 Usage

### Basic Usage

```tsx
import { Accordion } from "./components/Accordion";
import { Settings } from "lucide-react";

function App() {
  return (
    <div className="p-8">
      <Accordion title="My Accordion" icon={<Settings className="w-5 h-5" />}>
        <p>This is the accordion content!</p>
      </Accordion>
    </div>
  );
}
```

### Advanced Usage

```tsx
import { Accordion } from "./components/Accordion";
import { User, Lock } from "lucide-react";

function AdvancedExample() {
  const handleExpand = () => {
    console.log("Accordion expanded!");
  };

  return (
    <div className="space-y-4">
      {/_ Gradient variant with custom styling _/}
      <Accordion
        title="User Profile"
        variant="gradient"
        size="lg"
        icon={<User className="w-5 h-5 text-purple-500" />}
        onExpand={handleExpand}
        className="max-w-2xl"
        titleClassName="text-purple-800"
      >
        <div className="space-y-4">
          <h3>Profile Information</h3>
          <p>Manage your account settings and preferences.</p>
        </div>
      </Accordion>

      {/* Locked accordion */}
      <Accordion
        title="Premium Content"
        icon={<Lock className="w-5 h-5 text-red-500" />}
        locked
      >
        <p>This content requires a premium subscription.</p>
      </Accordion>

      {/* Custom title renderer */}
      <Accordion
        title="Custom Title"
        onRenderTitle={(title) => (
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {title}
          </span>
        )}
      >
        <p>Accordion with custom title rendering.</p>
      </Accordion>
    </div>
  );
}
```

## 📚 API Reference

### Props

| Prop               | Type                                                        | Default     | Description                              |
| ------------------ | ----------------------------------------------------------- | ----------- | ---------------------------------------- |
| `title`            | `string`                                                    | -           | **Required.** The accordion title text   |
| `children`         | `React.ReactNode`                                           | -           | **Required.** The accordion content      |
| `icon`             | `React.ReactNode`                                           | -           | Optional icon to display                 |
| `defaultIsOpen`    | `boolean`                                                   | `false`     | Whether the accordion is open by default |
| `onExpand`         | `() => void`                                                | -           | Callback fired when accordion expands    |
| `locked`           | `boolean`                                                   | `false`     | Whether the accordion is locked/disabled |
| `onRenderTitle`    | `(title: string) => React.ReactNode`                        | -           | Custom title renderer function           |
| `variant`          | `'default' \| 'gradient' \| 'glass' \| 'neon' \| 'minimal'` | `'default'` | Visual variant of the accordion          |
| `size`             | `'sm' \| 'md' \| 'lg'`                                      | `'md'`      | Size of the accordion                    |
| `iconPosition`     | `'left' \| 'right'`                                         | `'left'`    | Position of the icon                     |
| `className`        | `string`                                                    | -           | Additional CSS classes for the container |
| `titleClassName`   | `string`                                                    | -           | Additional CSS classes for the title     |
| `contentClassName` | `string`                                                    | -           | Additional CSS classes for the content   |
| `disabled`         | `boolean`                                                   | `false`     | Whether the accordion is disabled        |
| `id`               | `string`                                                    | -           | Custom ID for the accordion              |

### Variants

- **`default`**: Clean, professional styling with subtle shadows
- **`gradient`**: Beautiful gradient backgrounds with purple/pink themes
- **`glass`**: Modern glassmorphism effect with backdrop blur
- **`neon`**: Cyberpunk-inspired styling with glowing effects
- **`minimal`**: Clean, borderless design focused on content

### Accessibility Features

- ✅ **Keyboard Navigation**: Full support for Enter and Space keys
- ✅ **ARIA Attributes**: Proper `aria-expanded`, `aria-controls`, and `role` attributes
- ✅ **Focus Management**: Automatic focus handling and visual indicators
- ✅ **Screen Reader Support**: Semantic HTML structure and proper labeling
- ✅ **High Contrast**: Works with high contrast mode and custom themes

## 🎨 Customization

### Custom Styling

```tsx
<Accordion
  title="Custom Styled"
  className="border-2 border-blue-500 bg-blue-50"
  titleClassName="text-blue-800 font-bold"
  contentClassName="bg-blue-25 text-blue-700"
>
  <p>Custom styled accordion content</p>
</Accordion>
```

### Creating Your Own Variant

You can extend the component by creating custom variants:

```tsx
// Add to the variant type
type CustomVariant =
  | "default"
  | "gradient"
  | "glass"
  | "neon"
  | "minimal"
  | "custom";

// Then customize the styling logic in the component
```

## 🌙 Dark Mode Support

The accordion automatically supports dark mode when using Tailwind's dark mode classes:

```html
<html class="dark">
  <!-- Your app content -->
</html>
```

## 🔧 Development

### Project Structure

```
src/
├── components/
│ ├── Accordion.tsx # Main accordion component
│ └── AccordionDemo.tsx # Demo component
├── lib/
│ └── utils.ts # Utility functions
└── App.tsx # Main app component
```

### Building

```bash

# Development

npm run dev

# Build for production

npm run build

# Preview production build

npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/modern-accordion.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Make your changes
6. Submit a pull request

### Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure accessibility standards are maintained

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support the Project

If you find this accordion component helpful, consider supporting its development:

### 💰 Donations

Your support helps maintain and improve this project!

**PayPal**: [https://paypal.me/adityaace777](https://paypal.me/adityaace777)

**Buy Me a Coffee**: [https://coff.ee/aditya.ace](https://coff.ee/aditya.ace)

### 🌟 Other Ways to Support

- ⭐ Star this repository
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 📖 Improve documentation
- 🔄 Share with others

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React](https://reactjs.org/) for the awesome framework

## 📞 Contact

- **GitHub**: [@Aditya-Ace](https://github.com/Aditya-Ace)
- **Linkdin**: [@AdityaTiwari](www.linkedin.com/in/aditya-tiwari-b6582252)
- **Email**: aditya.ace@hotmail.com

---

<div align="center">

**Made with ❤️ by [Aditya Tiwari](https://github.com/Aditya-Ace)**

If this project helped you, please consider giving it a ⭐!

</div>
