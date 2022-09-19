import React from 'react'
import Card from '../../../Components/Card'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export interface IPosts {
    title: string,
    category: string[],
    author: string,
    Date: string
}

export const posts: IPosts[] = [
    {title: "spring", category: ["java", "spring"], author: "Dj Kou", Date: "2022-07-09"},
    {title: "spring", category: ["java", "spring"], author: "Dj Kou", Date: "2022-07-09"},
    {title: "spring", category: ["java", "spring"], author: "Dj Kou", Date: "2022-07-09"},
    {title: "spring", category: ["java", "spring"], author: "Dj Kou", Date: "2022-07-09"},
    {title: "spring", category: ["java", "spring"], author: "Dj Kou", Date: "2022-07-09"},
    {title: "spring", category: ["java", "spring"], author: "Dj Kou", Date: "2022-07-09"},
]

export default function TopTimeline () {

    return(
        <div className="space-y-5">
            <Card
                width={350}
                height={400}
                header={"5 top posts per week"}
                Icon={WhatshotIcon}
            >
                <div className="divide-y-2 divide-gray-200 px-5">
                    {posts.map(({title, category, author, Date}: IPosts) => (
                        <div>
                            <h1>{title}</h1>
                            <p>{Date}</p>
                            <div>
                                {category.map((word) => (
                                    <a>{word}</a>
                                ))}
                            </div>
                            <div>
                                By: {author}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            <Card
                width={350}
                height={400}
                header={"5 top posts per month"}
                Icon={TrendingUpIcon}
            >
                <div className="divide-y-2 divide-gray-200 px-5">
                    {posts.map(({title, category, author, Date}: IPosts) => (
                        <div>
                            <h1>{title}</h1>
                            <p>{Date}</p>
                            <div>
                                {category.map((word) => (
                                    <a>{word}</a>
                                ))}
                            </div>
                            <div>
                                By: {author}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}
