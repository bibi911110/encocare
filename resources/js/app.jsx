import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: (title) => `Encocare | ${title}`,
    progress: {
        color: '#ffffff',
    },
    resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
