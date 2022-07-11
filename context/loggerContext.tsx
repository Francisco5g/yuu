import React, { createContext, useContext, useState } from "react";

interface LoggerContextValues {
  log: boolean;
  logger(
    msg: string,
    options: {
      type: LoggerType;
    }
  ): void;
}

const LoggerContext = createContext<LoggerContextValues>({} as LoggerContextValues);

type LoggerType = "info" | "warning";

interface Props {
  children: React.ReactNode;
}

export function LoggerContextProvider(props: Props) {
  const [log, setLog] = useState(false);

  function logger(msg: string, options: { type: LoggerType }) {
    const type = options.type.toUpperCase();
    const loggerOptionsColor = {
      info: "color:cyan",
      warning: "color:yellow",
    };

    if (log) {
      console.log(`%c${type}%c - ${msg}`, loggerOptionsColor[options.type], "color:normal");
    }
  }

  const value: LoggerContextValues = {
    log,
    logger,
  };

  return <LoggerContext.Provider value={value}>{props.children}</LoggerContext.Provider>;
}

export function useLoggerContext() {
  return useContext(LoggerContext);
}
