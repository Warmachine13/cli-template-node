import { makePath } from "../../infra/gateway/path"
import { CreateUseCase } from "../../../domain/use-cases/create-use-case"
import { makeFileStorage } from "../../infra/gateway/file-storage"

export const makeUseCase = (): CreateUseCase => {
  return new CreateUseCase(
    makeFileStorage(),
    makePath()
  )
}
