
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { WordCard } from "@/components/WordCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Heart } from "lucide-react";

const favoriteWords = [
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
    id: 3,
    sourceWord: "Adventure",
    translation: "Aventura",
    meaning: "An exciting or unusual experience",
    example: "Their trip to the mountains was a great adventure.",
    studyCount: 7,
    isFavorite: true
  },
  {
    id: 4,
    sourceWord: "Serendipity",
    translation: "Serendipia",
    meaning: "The occurrence of pleasant discoveries by accident",
    example: "Meeting her was pure serendipity.",
    studyCount: 2,
    isFavorite: true
  },
  {
    id: 5,
    sourceWord: "Wanderlust",
    translation: "Pasión por viajar",
    meaning: "A strong desire to travel and explore the world",
    example: "Her wanderlust led her to visit 30 countries.",
    studyCount: 4,
    isFavorite: true
  }
];

const Favorites = () => {
  const [words, setWords] = useState(favoriteWords);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFavorite = (wordId: number) => {
    setWords(prev => 
      prev.map(word => 
        word.id === wordId 
          ? { ...word, isFavorite: !word.isFavorite }
          : word
      ).filter(word => word.isFavorite) // Remove unfavorited words from this view
    );
  };

  const filteredWords = words.filter(word =>
    word.sourceWord.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-red-50 to-pink-50">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white fill-current" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      Favorites
                    </h1>
                  </div>
                  <p className="text-gray-600">Your saved words and cherished vocabulary</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700">
                {words.length} favorites
              </Badge>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search your favorites..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-200 focus:border-red-300 focus:ring-red-200"
                />
              </div>
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Favorites Grid */}
            {filteredWords.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWords.map((word) => (
                  <WordCard
                    key={word.id}
                    word={word}
                    onToggleFavorite={() => toggleFavorite(word.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {searchTerm ? "No matching favorites" : "No favorites yet"}
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchTerm 
                    ? "Try adjusting your search terms" 
                    : "Start adding words to your favorites to see them here"
                  }
                </p>
                {!searchTerm && (
                  <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white">
                    Explore Words
                  </Button>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Favorites;
