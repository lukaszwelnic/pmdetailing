import { Suspense } from 'react';

function Spinner() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-10 h-10 rounded-full border-4 border-gold border-t-transparent animate-spin" />
        </div>
    );
}

export default function Loadable({ children }) {
    return (
        <Suspense fallback={<Spinner />}>
            {children}
        </Suspense>
    );
}
