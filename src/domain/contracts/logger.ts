export interface LogSuccess {
  log: (input: LogSuccess.Input) => void
}

export namespace LogSuccess {
  export type Input = { message?: any }
}

export interface LogFailure {
  error: (input: LogFailure.Input) => void
}

export namespace LogFailure {
  export type Input = { message?: unknown }
}
