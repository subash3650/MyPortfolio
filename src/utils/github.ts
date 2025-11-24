import axios from 'axios';
import { GitHubRepo, Project } from '@/types';

const GITHUB_API_BASE = 'https://api.github.com';

const GITHUB_USERNAME = 'subash3650';


export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
    try {
        const response = await axios.get<GitHubRepo[]>(
            `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`,
            {
                params: {
                    sort: 'updated',
                    per_page: 100,
                    type: 'owner',
                },
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        return [];
    }
}

const PROJECT_IMAGES: Record<string, string> = {
    'alzhid': '/images/projects/alzhid.jpg',
    'Patrick-Detect': '/images/projects/patrick-detect.jpg',
    'Sentinel': '/images/projects/sentinel.png',
    'Drugo': '/images/projects/drugo.png',
    'Dream_Light_events': '/images/projects/dream-light.jpg',
    'DeltaX': '/images/projects/deltax.jpg',
    'Taxi_Booking_java': '/images/projects/taxi-booking.jpg',
    'AgriDirect': '/images/projects/agri-direct.jpg',
    'DevRev': '/images/projects/devrev.jpg',
    'Distributed_systems': '/images/projects/distributed-systems.jpg',
    'subash3650': '/images/projects/github-profile.jpg',
    'Golang_Projects': '/images/projects/golang-projects.jpg',
    'Dream-Light-Freelance-Project': '/images/projects/dream-light-freelance.jpg',
    'MrCooper': '/images/projects/mrcooper.jpg',
    'VoterApp': '/images/projects/voter-app.jpg',
    'Spotify_clone': '/images/projects/spotify-clone.jpg',
    'StocksAnalyser': '/images/projects/stocks-analyser.jpg',
    'Web-IDE': '/images/projects/web-ide.jpg',
    'onlineLearningPortal': '/images/projects/learning-portal.jpg',
    'DSA_PRACTICE_SHEETS': '/images/projects/dsa-practice.jpg',
    'Modern_Ecommerce': '/images/projects/modern-ecommerce.jpg',
    'TrainTicketBooking': '/images/projects/train-booking.jpg',
    'MyPortfolio': '/images/projects/portfolio.jpg',
    'NewsApp': '/images/projects/news-app.jpg',
    'chatapp': '/images/projects/chat-app.jpg',
    'Calculator': '/images/projects/calculator.jpg',
    'RiddleGame': '/images/projects/riddle-game.jpg',
};

const PROJECT_DESCRIPTIONS: Record<string, string> = {
    'alzhid': 'AI/ML project analyzing MRI images to detect Alzheimer\'s disease severity and status.',
    'Patrick-Detect': 'AI/ML system analyzing voice patterns to detect Parkinson\'s disease severity.',
    'Sentinel': 'Social media sentiment analysis tool categorizing comments to save time for creators.',
    'Drugo': 'AI-powered message analyzer detecting drug-related content and alerting contacts.',
    'Dream_Light_events': 'Static web application showcasing work for an event management company.',
    'DeltaX': 'Collection of coding files focused on data structures and algorithms.',
    'Taxi_Booking_java': 'Simple taxi booking application built with Java.',
    'AgriDirect': 'Full-stack app connecting buyers directly with farmers, eliminating middlemen.',
    'DevRev': 'Coding repository focused on learning data structures.',
    'Distributed_systems': 'Efficient distributed system implementation in Go for social media backends.',
    'subash3650': 'My GitHub profile view page HTML.',
    'Golang_Projects': 'Collection of basic Go projects for learning and practice.',
    'Dream-Light-Freelance-Project': 'Freelance static web app project for an event management portfolio.',
    'MrCooper': 'Solutions to data structure problems from Mr. Cooper.',
    'VoterApp': 'Simple polling and voting application built with React.',
    'Spotify_clone': 'Clone of the Spotify music streaming application.',
    'StocksAnalyser': 'AI/ML project analyzing past stock data for trends.',
    'Web-IDE': 'Online IDE for compiling HTML, CSS, and JavaScript projects.',
    'onlineLearningPortal': 'Educational portal providing access to students in rural areas with low connectivity.',
    'DSA_PRACTICE_SHEETS': 'Collection of essential Data Structures and Algorithms practice problems.',
    'Modern_Ecommerce': 'E-commerce website for selling groceries and vegetables.',
    'TrainTicketBooking': 'Web application for booking train tickets.',
    'MyPortfolio': 'My personal portfolio website showcasing my work and skills.',
    'NewsApp': 'Fast, API-integrated news app with AI/ML specialization for latest updates.',
    'chatapp': 'Simple messaging application for connecting with friends and family.',
    'Calculator': 'Simple calculator application built using Java.',
    'RiddleGame': 'Interactive riddle game application built with Java.',
};


export function transformRepoToProject(repo: GitHubRepo): Project {
    return {
        id: repo.id,
        name: repo.name,
        description: PROJECT_DESCRIPTIONS[repo.name] || repo.description || 'No description available',
        techStack: repo.topics || [repo.language || 'Other'],
        githubUrl: repo.html_url,
        demoUrl: repo.homepage || null,
        imageUrl: PROJECT_IMAGES[repo.name] || generateProjectImage(repo.name),
        language: repo.language || 'Unknown',
    };
}


function generateProjectImage(projectName: string): string {
    const encodedName = encodeURIComponent(projectName.replace(/[-_]/g, ' '));
    return `https://picsum.photos/seed/${encodedName}/600/400`;
}


export async function fetchProjects(): Promise<Project[]> {
    const repos = await fetchGitHubRepos();


    const activeRepos = repos.filter((repo) => !repo.fork);


    return activeRepos.map(transformRepoToProject);
}
