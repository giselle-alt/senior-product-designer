import { motion } from 'framer-motion';

interface Tool {
  name: string;
  description: string;
}

interface ChapterHeaderProps {
  client: string;
  role: string;
  date: string;
  tools?: Tool[];
}

const ChapterHeader = ({ client, role, date, tools }: ChapterHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="w-full"
    >
      <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/20">
        
        {/* Metadata list */}
        <div className="space-y-3">
          <div>
            <span className="text-muted-foreground/70 text-sm">Client: </span>
            <span className="text-primary font-medium text-sm">{client}</span>
          </div>
          
          <div>
            <span className="text-muted-foreground/70 text-sm">Role: </span>
            <span className="text-foreground text-sm">{role}</span>
          </div>
          
          <div>
            <span className="text-muted-foreground/70 text-sm">Date: </span>
            <span className="text-foreground text-sm">{date}</span>
          </div>
        </div>

        {/* Tools section */}
        {tools && tools.length > 0 && (
          <div className="mt-4 pt-3 border-t border-border/20">
            <span className="text-muted-foreground/70 text-xs uppercase tracking-wider block mb-2">
              Tools Used:
            </span>
            <ul className="space-y-1.5">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-start gap-2 text-xs">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">
                    <span className="text-foreground/90">{tool.name}</span>
                    {tool.description && ` – ${tool.description}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChapterHeader;
