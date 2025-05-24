
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count: string;
  gradient: string;
}

export function ModuleCard({ title, description, icon: Icon, count, gradient }: ModuleCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border border-gray-100">
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {description}
              </p>
              <p className="text-xs text-gray-500 font-medium">
                {count}
              </p>
            </div>
          </div>
          
          <Button 
            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 border-0 group-hover:bg-gradient-to-r group-hover:from-purple-50 group-hover:to-blue-50 group-hover:text-purple-700 transition-all duration-300"
          >
            Open {title}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
