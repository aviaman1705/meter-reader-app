import React, { useState } from 'react';

export const SearchContext = React.createContext<{
    isDisabled: boolean;
    update(isDisabled: boolean): void
}>({ isDisabled: false, update: () => { } });

export default SearchContext;
