import { Project, ProjectID, Projects } from '../types/Project';
import { Link } from '../types/Link';
import { routes } from '../constants/routes';

export function getGitHubProjectID(project: Project): string | null {
  if (
    !project
    || !project?.gitHubRepo
    || !project?.gitHubRepo?.repo
    || !project?.gitHubRepo?.owner
  ) {
    return null;
  }
  return `${project.gitHubRepo.owner}/${project.gitHubRepo.repo}`;
}

export function projectMapToArray(projects: Projects): Project[] {
    return Object.keys(projects)
      .map<Project>((projectID: ProjectID) => {
        const project: Project = { ...projects[projectID] };
        // Make sure that the project ID is the same as the project key in the projects map.
        project.id = projectID;
        return project;
      });
  }