export interface WorkExperience {
    dateFinished: string,
    place: string
}

export  interface Project{
    description: string,
    image: string,
    title: string,
    toolsAndSkills: string
}

export  interface DatabaseData {
  public: {
    greeting: string[],
    profile: {
        bio: string[],
        cv: string,
        education: string[],
        email: string,
        firstName: string
        github: string,
        lastName: string,
        linkedin: string,
        profilePic: string,
        workExperience: WorkExperience[]
    },
    project: Project[] 
  }
}