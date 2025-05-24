
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Copy, Volume2 } from "lucide-react";

export function TranslationInterface() {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");

  const handleTranslate = () => {
    // Mock translation for demo
    if (sourceText.toLowerCase() === "hello") {
      setTargetText("Hola");
    } else if (sourceText.toLowerCase() === "beautiful") {
      setTargetText("Hermoso/a");
    } else if (sourceText.toLowerCase() === "adventure") {
      setTargetText("Aventura");
    } else {
      setTargetText("Translation would appear here...");
    }
  };

  const swapLanguages = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    const tempText = sourceText;
    setSourceText(targetText);
    setTargetText(tempText);
  };

  return (
    <Card className="bg-gradient-to-r from-purple-500 to-blue-500 border-0 shadow-xl">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Language Selectors */}
          <div className="flex items-center gap-4">
            <Select value={sourceLang} onValueChange={setSourceLang}>
              <SelectTrigger className="w-40 bg-white/90 border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="es">🇪🇸 Spanish</SelectItem>
                <SelectItem value="fr">🇫🇷 French</SelectItem>
                <SelectItem value="de">🇩🇪 German</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={swapLanguages}
              className="bg-white/20 hover:bg-white/30 text-white border-0"
            >
              <ArrowUpDown className="w-4 h-4" />
            </Button>
            
            <Select value={targetLang} onValueChange={setTargetLang}>
              <SelectTrigger className="w-40 bg-white/90 border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">🇪🇸 Spanish</SelectItem>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="fr">🇫🇷 French</SelectItem>
                <SelectItem value="de">🇩🇪 German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Translation Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="bg-white rounded-xl p-4 min-h-[120px]">
                <Input
                  placeholder="Type text to translate..."
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  className="border-0 text-lg placeholder:text-gray-400 focus-visible:ring-0 bg-transparent"
                />
                <div className="flex items-center gap-2 mt-3">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-1">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-1">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-white rounded-xl p-4 min-h-[120px]">
                <div className="text-lg text-gray-700 min-h-[24px]">
                  {targetText || "Translation will appear here..."}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-1">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-1">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Translate Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleTranslate}
              disabled={!sourceText.trim()}
              className="bg-white text-purple-600 hover:bg-white/90 px-8 py-2 rounded-full font-semibold"
            >
              Translate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
