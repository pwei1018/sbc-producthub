// const labelsRaw = [
//   {
//     node: {
//       id: "Z2lkOi8vcmFwdG9yL0xhYmVsLzc0MzQ3OTEz",
//       name: "Assets",
//     },
//   },
//   {
//     node: {
//       id: "Z2lkOi8vcmFwdG9yL0xhYmVsLzgzOTc5NA",
//       name: "bug",
//     },
//   },
// ];

// const labelExpected = [
//   {
//     id: "1",
//     name: "Team 1",
//   },
//   {
//     id: "2",
//     name: "Team 2",
//   },
// ];

import { afterEach, describe, expect, it, vi } from 'vitest'
import { getLabels } from '../../composable/classifyRelease'

const labels = {
  items: [
    {
      node: {
        id: '1',
        name: 'Team 1'
      }
    },
    {
      node: {
        id: '2',
        name: 'Team 2'
      }
    }
  ],
  expected: [
    {
      id: '1',
      name: 'Team 1'
    },
    {
      id: '2',
      name: 'Team 2'
    }
  ],
  getLabels
}

describe('helper functions test', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('get labels withy a spy', () => {
    const spy = vi.spyOn(labels, 'getLabels')
    expect(spy.getMockName()).toEqual('getLabels')
    expect(labels.getLabels(labels.items)).toEqual(
      labels.expected
    )
    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockImplementationOnce(() => [])
    expect(labels.getLabels(labels.items)).toEqual([])

    expect(spy).toHaveBeenCalledTimes(2)
  })
})
