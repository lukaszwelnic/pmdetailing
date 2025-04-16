import { Suspense } from 'react';

export default function Loadable({ children }) {
    return (
        <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
            {children}
        </Suspense>
    );
}