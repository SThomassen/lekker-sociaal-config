import { ChallengeCategory } from "../challenge.types";

export const drawChallenges: ChallengeCategory = {
    name: 'Draw',
    emoji: '🎨',
    weight: 1,
    description: 'Draw challenges',
    challenges: [
        // 🟢 Makkelijk
        { id: 'c98332b1-1d8a-4728-a85f-f018765821f1', name: 'Fruit bowl', description: 'Draw a simple bowl with a few pieces of fruit in it.', difficulty: 'easy', created_by: 'editor' },
        { id: '3f0a0c88-265a-4167-b769-adef78e4bd84', name: 'Your coffee mug', description: 'Draw your favorite mug or cup as you see it right now.', difficulty: 'easy', created_by: 'editor' },
        { id: 'b79a585e-4607-467c-82bf-3c8b72a76d61', name: 'Self-portrait (cartoon style)', description: 'Make a cartoon version of yourself.', difficulty: 'easy', created_by: 'editor' },
        { id: '75a6a287-91cb-4c46-8d9f-dff157b10314', name: 'House with a tree', description: 'Draw a small house with a tree beside it.', difficulty: 'easy', created_by: 'editor' },
        { id: '9c817019-4910-49c4-af9b-4c2d4acbb506', name: 'Pet or animal', description: 'Draw your pet or your favorite animal.', difficulty: 'easy', created_by: 'editor' },
        { id: 'a39fc566-939c-467a-a29b-22b83df13cb5', name: 'Hands', description: 'Draw your own hand in any position.', difficulty: 'easy', created_by: 'editor' },
        { id: '3caa5bfb-e88f-4360-9162-218c037142e2', name: 'Favorite food', description: 'Draw your favorite meal or snack.', difficulty: 'easy', created_by: 'editor' },
        { id: 'ca04f5af-698d-4d19-ab6a-ae33f51b401a', name: 'Everyday object', description: 'Draw a random object near you (keys, glasses, phone, etc.).', difficulty: 'easy', created_by: 'editor' },
        { id: '049b0ec6-6bfb-4ce0-8134-680e84ef5ed5', name: 'Skyline silhouette', description: 'Draw the skyline of a city using only silhouettes.', difficulty: 'easy', created_by: 'editor' },
        { id: 'ff341c79-9396-44a8-a70e-9f690aab596a', name: 'Still life of 3 items', description: 'Pick three objects around you and draw them together.', difficulty: 'easy', created_by: 'editor' },
    
        // 🟡 Gemiddeld
        { id: 'b74d0ac0-0f93-4f5c-97a3-fd1c7fc164aa', name: 'Fantasy creature', description: 'Invent and draw your own fantasy creature combining two animals.', difficulty: 'medium', created_by: 'editor' },
        { id: 'ae673308-6248-425f-99a4-3709b95124e9', name: 'Portrait from photo', description: 'Draw a portrait based on a photo reference.', difficulty: 'medium', created_by: 'editor' },
        { id: '2eaf2d58-4492-4d6f-8975-5105e96e9215', name: 'Room perspective', description: 'Draw your room using one-point perspective.', difficulty: 'medium', created_by: 'editor' },
        { id: 'a6f47e4e-3bec-4518-b0c4-72e5d818e135', name: 'Reflections', description: 'Draw something reflective, like a mirror or glass object.', difficulty: 'medium', created_by: 'editor' },
        { id: '0f940b49-27d9-4648-be88-fa0ad1608438', name: 'Character design', description: 'Design an original character with outfit and expression.', difficulty: 'medium', created_by: 'editor' },
        { id: 'cebb97f4-cbaf-4161-9a73-e5daf84498e4', name: 'Animal in motion', description: 'Draw an animal mid-action (jumping, running, flying).', difficulty: 'medium', created_by: 'editor' },
        { id: 'fed6e710-0334-429d-b773-55a59f82e596', name: 'Street scene', description: 'Draw a small street scene with people or vehicles.', difficulty: 'medium', created_by: 'editor' },
        { id: '4eb53e4e-85c6-4e75-b014-934f5b387f64', name: 'Mechanical object', description: 'Draw a detailed mechanical item like a bike, watch, or engine.', difficulty: 'medium', created_by: 'editor' },
        { id: '351b12fb-065d-4554-a543-6eed05cc6187', name: 'Light and shadow study', description: 'Choose an object and draw it under a single light source with shading.', difficulty: 'medium', created_by: 'editor' },
        { id: '34a93f54-5651-49ce-b440-daf6274f8587', name: 'Emotion face series', description: 'Draw the same face expressing five different emotions.', difficulty: 'medium', created_by: 'editor' },
    
        // 🔴 Moeilijk
        { id: 'b39fbf87-11ed-4402-8d0a-8aedf02ff14d', name: 'Full-body anatomy', description: 'Draw a human figure in a dynamic pose with correct proportions.', difficulty: 'hard', created_by: 'editor' },
        { id: '1d3abd5c-369d-4df1-b9c8-c1154f07792c', name: 'Complex perspective', description: 'Draw an urban scene using two- or three-point perspective.', difficulty: 'hard', created_by: 'editor' },
        { id: '98ba1029-1731-45f3-8d22-609fdf01a0ab', name: 'Mythical scene', description: 'Illustrate a scene from mythology or your own fantasy story.', difficulty: 'hard', created_by: 'editor' },
        { id: 'a10f9b37-5c7a-4ad9-9842-d6b848480f7a', name: 'Portrait with expression', description: 'Draw a realistic portrait that clearly shows emotion.', difficulty: 'hard', created_by: 'editor' },
        { id: 'cd50a402-0888-4708-9a44-f0a164e85acd', name: 'Architectural drawing', description: 'Draw a detailed building with textures and depth.', difficulty: 'hard', created_by: 'editor' },
        { id: '3a6f59a9-20c1-4669-9e45-df6f75dc5db3', name: 'Animal anatomy study', description: 'Draw the skeleton and muscles of an animal in motion.', difficulty: 'hard', created_by: 'editor' },
        { id: '29e2f000-5b60-4b0d-9181-ff586f5e4fd6', name: 'Illustrated story moment', description: 'Create an illustration that tells a story in one frame.', difficulty: 'hard', created_by: 'editor' },
        { id: 'a481b181-97d9-4282-864e-b992008e784a', name: 'Lighting study (multiple sources)', description: 'Draw an object lit by multiple light sources in different colors.', difficulty: 'hard', created_by: 'editor' },
        { id: 'ddeb682a-c41f-4649-bb7b-0b22af0cc27e', name: 'Environment concept art', description: 'Design a full environment — interior or exterior — with depth and atmosphere.', difficulty: 'hard', created_by: 'editor' },
        { id: '16a26f29-3e12-41f3-9c21-30f40818ea40', name: 'Surrealism piece', description: 'Create a surreal or dreamlike composition inspired by your imagination.', difficulty: 'hard', created_by: 'editor' }
    ]
}