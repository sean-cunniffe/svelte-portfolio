export interface WorkExperience {
    dateFinished: string
    place: string
}

export interface Project {
    description: string
    image: string
    title: string
    toolsAndSkills: string
}

export interface TimeLinePeriod {
    startDate: string
    endDate: string
    position: string
    establishment: string
    description: string
    imgURL: string
}

export interface DatabaseData {
    public: {
        greeting: string[]
        profile: {
            bio: string[]
            cv: string
            timeline: TimeLinePeriod[]
            email: string
            firstName: string
            github: string
            lastName: string
            linkedin: string
            profilePic: string
        }
        project: Project[]
    }
}
