import { motion } from 'framer-motion';

interface ChapterHeaderProps {
  client: string;
  role: string;
  date: string;
  tools?: string[];
}

const ChapterHeader = ({ client, role, date, tools }: ChapterHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="mb-8"
    >
      <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/20">
        {/* Primary metadata row */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0 mb-3">
          <span className="text-sm md:text-base">
            <span className="text-muted-foreground/70">Client: </span>
            <span className="text-primary font-medium">{client}</span>
          </span>
          <span className="text-muted-foreground/50 mx-2 hidden md:inline">·</span>
          <span className="text-muted-foreground text-sm">
            {role}
          </span>
          <span className="text-muted-foreground/50 mx-2 hidden md:inline">·</span>
          <span className="text-muted-foreground text-sm">
            {date}
          </span>
        </div>

        {/* Tools row */}
        {tools && tools.length > 0 && (
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span className="text-muted-foreground/70 text-xs uppercase tracking-wider">
              Tools Used:
            </span>
            <span className="text-muted-foreground text-xs md:text-sm">
              {tools.join(', ')}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChapterHeader;
