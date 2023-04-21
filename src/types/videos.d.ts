export type Videos = Video[]

export interface Video {
	type: string
	video: VideoClass
}

interface VideoClass {
	author: Author
	badges: string[]
	descriptionSnippet: string
	isLiveNow: boolean
	lengthSeconds: number
	movingThumbnails: MovingThumbnail[]
	publishedTimeText: string
	stats: Stats
	thumbnails: MovingThumbnail[]
	title: string
	videoId: string
}

interface Author {
	avatar: MovingThumbnail[]
	badges: Badge[]
	canonicalBaseUrl: null
	channelId: string
	title: string
}

interface MovingThumbnail {
	height: number
	url: string
	width: number
}

interface Badge {
	text: string
	type: string
}

interface Stats {
	views: number
}
