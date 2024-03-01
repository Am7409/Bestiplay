export interface IGameData{
    uuid: string;
    title: string;
    players_min: string;
    players_max: number;
    iscurrated: boolean;
    description: string;
    subtitle: string;
    hashostedgame: null | string;
    ispremium: null | boolean; 
    youtubeurl: string;
    minutes: string;
    image: string | null;
    playslug: string | null;
    cdnimage: string;
    imagewebp: string | null;
    displayplayers: string;
    content: string;
    examples: null | string; 
    version: string;
    age: string;
    coverartwebp: string | null;
    gameplay: string;
    setup: string;
    cdnimagewebp: string;
    ispublic: boolean;
    coverart: string;
    colour: string;
    slug: string;
    players: null | string;
    filters: Array<string> ;
    contents: Array<IContent>;
}

export interface IContent{
title:string;
steps:Array<string>;
description:string;
}