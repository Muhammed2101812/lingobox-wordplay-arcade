
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Volume2, Image as ImageIcon, MoreHorizontal } from "lucide-react";

interface WordCardProps {
  word: {
    id: number;
    sourceWord: string;
    translation: string;
    meaning: string;
    example: string;
    studyCount: number;
    isFavorite: boolean;
  };
  onToggleFavorite: () => void;
}

export function WordCard({ word, onToggleFavorite }: WordCardProps) {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header with favorite button */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {word.sourceWord}
              </h3>
              <p className="text-lg text-purple-600 font-semibold">
                {word.translation}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleFavorite}
              className={`p-2 transition-colors ${
                word.isFavorite 
                  ? "text-red-500 hover:text-red-600" 
                  : "text-gray-400 hover:text-red-500"
              }`}
            >
              <Heart className={`w-5 h-5 ${word.isFavorite ? "fill-current" : ""}`} />
            </Button>
          </div>

          {/* Meaning toggle */}
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowMeaning(!showMeaning)}
              className="text-sm text-gray-600 hover:bg-gray-50 border-gray-200"
            >
              {showMeaning ? "Hide" : "Show"} meaning
            </Button>
            
            {showMeaning && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-2 animate-fade-in">
                <p className="text-sm text-gray-700 font-medium">
                  {word.meaning}
                </p>
                <p className="text-sm text-gray-600 italic">
                  "{word.example}"
                </p>
              </div>
            )}
          </div>

          {/* Study count and actions */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <Badge variant="secondary" className="bg-teal-100 text-teal-700">
              Studied {word.studyCount}x
            </Badge>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-gray-600">
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-gray-600">
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
