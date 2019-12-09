export default {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    CancelToken: {
        source: jest.fn(() => ({ token: 'token' }))
    },
    isCancel: jest.fn(() => false)
};
