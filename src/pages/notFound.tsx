const NotFound: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-foreground text-3xl transform text-primary font-semibold">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        404 - Page Not Found
      </div>
    </div>
  );
};
export default NotFound;
