import React, { createContext, useContext, useReducer } from 'react';

// prepare the datalayer
export const DataLayerContext = createContext();

// create the actual data layer
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);

export default DataLayer;
