export default function DeleteConfirmModal({
  isOpen,
  selectedUser,
  isDeleting,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="space-y-4">
      <p className="text-foreground">
        Are you sure you want to delete <strong>{selectedUser?.name}</strong>?
        This action cannot be undone.
      </p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-red-800 transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={isDeleting}
          className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md text-sm font-medium hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isDeleting ? "Deleting..." : "Delete User"}
        </button>
      </div>
    </div>
  );
}
