import {server} from 'test/server'

jest.mock('react-query')
jest.mock('auth-provider')

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
