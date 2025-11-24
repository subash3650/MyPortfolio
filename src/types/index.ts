
export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
}


export interface Project {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    demoUrl: string | null;
    imageUrl: string;
    language: string;
}


export interface Certificate {
    id: string;
    name: string;
    company: string;
    description: string;
    driveUrl: string;
    issueDate: string;
    thumbnailUrl?: string;
}


export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}
