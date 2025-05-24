
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TranslationInterface } from "@/components/TranslationInterface";
import { WordCard } from "@/components/WordCard";
import { ModuleCard } from "@/components/ModuleCard";
import { ArrowUpDown, BookOpen, Brain, Lightbulb, Heart } from "lucide-react";

const sampleWords = [
  {
    id: 1,
    sourceWord: "Hello",
    translation: "Hola",
    meaning: "A greeting used when meeting someone",
    example: "Hello, how are you today?",
    studyCount: 5,
    isFavorite: true
  },
  {
    id: 2,
    sourceWord: "Beautiful",
    translation: "Hermoso/a",
    meaning: "Having beauty; pleasing to the senses",
    example: "The sunset was absolutely beautiful.",
    studyCount: 3,
    isFavorite: false
  },
  {
    id: 3,
    sourceWord: "Adventure",
    translation: "Aventura",
    meaning: "An exciting or unusual experience",
    example: "Their trip to the mountains was a great adventure.",
    studyCount: 7,
    isFavorite: true
  }
];

const Index = () => {
  const [currentWords, setCurrentWords] = useState(sampleWords);
  
  const toggleFavorite = (wordId: number) => {
    setCurrentWords(prev => 
      prev.map(word => 
        word.id === wordId 
          ? { ...word, isFavorite: !word.isFavorite }
          : word
      )
    );
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-50 to-blue-50">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    LingoBox
                  </h1>
                  <p className="text-gray-600 mt-1">Your playful language learning companion</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Badge variant="secondary" className="bg-gradient-to-r from-teal-100 to-green-100 text-teal-700">
                  🎯 Level 3
                </Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
                  ⚡ 25 Streak
                </Badge>
              </div>
            </div>

            {/* Translation Interface */}
            <TranslationInterface />

            {/* Module Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ModuleCard
                title="Word Lists"
                description="Organized vocabulary collections"
                icon={BookOpen}
                count={`${currentWords.length} words`}
                gradient="from-purple-500 to-blue-500"
              />
              <ModuleCard
                title="Flashcards"
                description="Interactive study sessions"
                icon={Brain}
                count="Ready to study"
                gradient="from-teal-500 to-green-500"
              />
              <ModuleCard
                title="Vocabulary Suggestions"
                description="Discover new words daily"
                icon={Lightbulb}
                count="5 new today"
                gradient="from-orange-500 to-red-500"
              />
            </div>

            {/* Recent Words Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Recent Words</h2>
                <Button variant="outline" size="sm" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                  View All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentWords.map((word) => (
                  <WordCard
                    key={word.id}
                    word={word}
                    onToggleFavorite={() => toggleFavorite(word.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
