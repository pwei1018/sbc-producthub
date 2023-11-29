import filterReleases from './filterRelease'
import { castingReleases, castingSprint } from './castingResponse'
import { Response } from '~/interface/interfaces'
import { getSprint } from '~/composables/getSprint'
import { getReleases } from '~/composables/getReleases'

export default async function getData (boardID: any) {
  const sprint = await getSprint(boardID)
  // console.log(sprint)
  const releases = await getReleases(boardID)
  // console.log(releases)
  const releasesInRange = filterReleases(
    releases,
    sprint.startAt,
    sprint.endAt
  )
  // console.log(releasesInRange)
  const castedSprint = castingSprint(sprint, releasesInRange.length)
  // console.log(castedSprint)
  const castedReleases = castingReleases(releasesInRange)
  const res: Response = {
    sprint: castedSprint,
    releases: castedReleases
  }
  return res
}
