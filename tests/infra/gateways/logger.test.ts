// import { Logger } from '@/infra/gateways'
import { Logger } from "../../../src/infra/gateways/logger";

import { vitest, describe, beforeAll, beforeEach, it, expect } from 'vitest'
// import { Logger } from "pino"

const fakePino = {
  info: vitest.fn(),
  error: vitest.fn(),
  warn: vitest.fn(),
  debug: vitest.fn()
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fakePinoFunc = () => {
  return fakePino
}
fakePinoFunc.destination = vitest.fn()

vitest.doMock('pino', () => { return fakePinoFunc })

describe('Logger', () => {
  let sut: Logger
  // let fakepino: vitest.Mocked<typeof pino>
  // let template: string
  // let data: Record<string, unknown>

  beforeAll(() => {
    // template = 'anyTemplate'
    // data = { a: '1' }
    // fakepino = pino as vitest.Mocked<typeof pino>
  })

  beforeEach(() => {
    sut = new Logger()
  })

  describe('info', () => {
    // it('should call pino.info with correct params', async () => {
    //   console.log(typeof pino)
    //   expect(fakePinoFunc.).toBeCalledWith({
    //     transport: {
    //       target: 'pino-pretty',
    //       options: {
    //         colorize: true
    //       }
    //     }
    //   })
    // })
    it('should call compile with correct input', async () => {
      expect(sut.log({ message: 'teste' })).toBeUndefined()
    })

    it('should return data on success', async () => {
      // const result = sut.render(template, data)

      // expect(result).toEqual(undefined)
    })
  })

  describe('error', () => {
    it('should call pino.error with correct params', async () => {
      expect(sut.error({ message: 'teste' })).toBeUndefined()
    })
  })
})
