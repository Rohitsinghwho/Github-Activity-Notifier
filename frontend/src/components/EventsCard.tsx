import { GithubEvents } from "../utils/GithubEvents";
import type { EventsCardProps } from "../types/EventCardProps";
const EventsCard = ({
  EventName,
  EventCount,
  EventActivityNumber,
}: EventsCardProps) => {
  return (
    <div
      className="
    bg-EventCardBackground 
    p-4 
    rounded-lg 
    shadow-md 
    flex
    flex-col
    items-start
    gap-1
    min-w-32
    max-w-fit
    "
    >
      <span className="text-xl font-bold tracking-wider text-EventCardTextHeading">{EventName}</span>
      <div className="flex flex-col items-start">
      <span className="text-2xl font-semibold text-EventCardTextNumber">{EventCount}</span>
      <span className="text-sm text-EventCardTextSubheading">
        {EventName === GithubEvents.PushEvent
          ? `${EventActivityNumber} commits total`
          : EventName === GithubEvents.PullRequestEvent
            ? `${EventActivityNumber} merged`
            : EventName === GithubEvents.IssuesEvent
              ? `${EventActivityNumber} open`
              : EventName === GithubEvents.IssueCommentEvent
                ? `${EventActivityNumber} issue comments total`
                : EventName === GithubEvents.ForkEvent
                  ? `${EventActivityNumber} forks total`
                  : EventName === GithubEvents.WatchEvent
                    ? `${EventActivityNumber} watchers total`
                    : EventName === GithubEvents.CreateEvent
                      ? `${EventActivityNumber} creates total`
                      : EventName === GithubEvents.DeleteEvent
                        ? `${EventActivityNumber} deletes total`
                        : EventName === GithubEvents.ReleaseEvent
                          ? `${EventActivityNumber} releases total`
                          : EventName === GithubEvents.MemberEvent
                            ? `${EventActivityNumber} members total`
                            : EventName === GithubEvents.PublicEvent
                              ? `${EventActivityNumber} public events total`
                              : EventName ===
                                  GithubEvents.PullRequestReviewEvent
                                ? `${EventActivityNumber} pull request reviews total`
                                : EventName ===
                                    GithubEvents.PullRequestReviewCommentEvent
                                  ? `${EventActivityNumber} pull request review comments total`
                                  : EventName ===
                                      GithubEvents.CommitCommentEvent
                                    ? `${EventActivityNumber} commit comments total`
                                    : ""}
      </span>
      </div>
    </div>
  );
};

export default EventsCard;
