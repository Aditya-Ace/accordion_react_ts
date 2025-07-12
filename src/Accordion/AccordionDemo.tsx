import { Sparkles, Settings, User, HelpCircle, Lock } from "lucide-react";

import { Accordion } from "./Accordion";

export const AccordionDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Modern Accordion Components
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Beautiful, accessible, and fully responsive accordion components
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Variant */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Default Style
            </h2>
            <div className="space-y-3">
              <Accordion
                title="Getting Started"
                icon={<Sparkles className="w-5 h-5 text-blue-500" />}
                defaultIsOpen
              >
                <p className="text-gray-600 dark:text-gray-300">
                  Welcome to our modern accordion component! This component
                  features smooth animations, full accessibility support, and
                  beautiful styling options.
                </p>
              </Accordion>

              <Accordion
                title="Advanced Features"
                icon={<Settings className="w-5 h-5 text-green-500" />}
              >
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    Our accordion includes:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Keyboard navigation support</li>
                    <li>Screen reader compatibility</li>
                    <li>Smooth animations with Framer Motion</li>
                    <li>Multiple visual variants</li>
                    <li>Responsive design</li>
                  </ul>
                </div>
              </Accordion>

              <Accordion
                title="Locked Content"
                icon={<Lock className="w-5 h-5 text-red-500" />}
                locked
              >
                <p>This content is locked and cannot be accessed.</p>
              </Accordion>
            </div>
          </div>

          {/* Gradient Variant */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Gradient Style
            </h2>
            <div className="space-y-3">
              <Accordion
                title="User Profile"
                icon={<User className="w-5 h-5 text-purple-500" />}
                variant="gradient"
                size="lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        John Doe
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Premium Member
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Manage your profile settings, preferences, and account
                    information.
                  </p>
                </div>
              </Accordion>

              <Accordion
                title="Help & Support"
                icon={<HelpCircle className="w-5 h-5 text-indigo-500" />}
                variant="gradient"
                iconPosition="right"
              >
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Need assistance? We're here to help!
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                    Contact Support
                  </button>
                </div>
              </Accordion>
            </div>
          </div>

          {/* Glass Variant */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Glass Style
            </h2>
            <div className="space-y-3">
              <Accordion
                title="Glassmorphism Design"
                icon={<Sparkles className="w-5 h-5 text-blue-400" />}
                variant="glass"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  Experience the modern glassmorphism design with backdrop blur
                  effects.
                </p>
              </Accordion>
            </div>
          </div>

          {/* Neon Variant */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Neon Style
            </h2>
            <div className="space-y-3">
              <Accordion
                title="Cyberpunk Theme"
                icon={<Sparkles className="w-5 h-5 text-cyan-400" />}
                variant="neon"
              >
                <p className="text-gray-200">
                  Embrace the future with our neon-styled accordion featuring
                  glowing effects.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
