import fs from 'fs'
import {it, describe,expect,beforeEach,  vitest} from 'vitest'
import {FileStorage} from '../../../src/infra/gateways/file-storage'

vitest.mock('fs')
describe('FileStorage', () => {
    let sut: FileStorage

    beforeEach(() => {
    sut = new FileStorage()
  })

    it('should be a function', () => {
        expect(typeof FileStorage).toBe('function')
    })

    it('should be defined', () => {
        expect(sut).toBeDefined()
    })

       it('should validate folderExists', () => {
           sut.folderExists({path: 'any_folder'})
        expect(sut.folderExists).toBeDefined()
           expect(fs.existsSync).toHaveBeenCalledWith('any_folder')
           expect(typeof sut.folderExists).toBe('function')
    })

       it('should validate makeDir', () => {
        expect(sut.makeDir).toBeDefined()

        sut.makeDir({path: 'aaa'})
           expect(fs.mkdirSync).toHaveBeenCalledWith('aaa')

    })
       it('should validate readFileString', () => {
           sut.readFileString({ path: 'aaa' })
           expect(fs.readFileSync).toHaveBeenCalledWith('aaa', 'utf8')
    })
       it('should validate writeFileString', () => {
           sut.writeFileString({ path: 'aaa', content: 'bbb' })
        expect(sut.writeFileString).toBeDefined()
           expect(fs.writeFileSync).toHaveBeenCalledWith('aaa', 'bbb')
    })
})
