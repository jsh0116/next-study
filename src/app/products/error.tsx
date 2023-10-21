'use client';

import React from 'react';

interface Props {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ProductError({ error, reset }: Props) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}