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
      className="border-b border-border/30 pb-8 mb-8"
    >
      {/* Primary metadata row */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0 mb-3">
        <span className="text-primary font-medium text-sm md:text-base">
          {client}
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
    </motion.div>
  );
};

export default ChapterHeader;
