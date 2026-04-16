import React from 'react';

export const ActionButton = React.memo(({ onClick, label }: { onClick: () => void; label: string }) => {
    console.log(`Renderizando botão: ${label}`);
    return <button onClick={onClick}>{label}</button>;
});

// export const ActionButton = ({ onClick, label }: { onClick: () => void; label: string }) => {
//     console.log(`Renderizando botão: ${label}`);
//     return <button onClick={onClick}>{label}</button>;
// };