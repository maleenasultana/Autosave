import React, { useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

import { ExperimentData, LOCAL_STORAGE_KEY } from "./AutoS";

const DEBOUNCE_SAVE_DELAY_MS = 1000;

export default function Autosave({ experimentData }) {
  const saveExperimentData = useCallback(newExperimentData => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, newExperimentData.name);
    console.log("Saved successfully!");
  }, []);

  const debouncedSave = useCallback(
    debounce(async newExperimentData => {
      saveExperimentData(newExperimentData);
    }, DEBOUNCE_SAVE_DELAY_MS),
    []
  );

  useEffect(() => {
    if (experimentData) {
      debouncedSave(experimentData);
    }
  }, [experimentData, debouncedSave]);

  return null;
}
