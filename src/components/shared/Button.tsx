import React, { CSSProperties } from 'react';

type ButtonKind = 'primary' | 'secondary';

export const BUTTON_KIND_PRIMARY: ButtonKind = 'primary';
export const BUTTON_KIND_SECONDARY: ButtonKind = 'secondary';

export type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  disabled?: boolean,
  title?: string | undefined,
  startEnhancer?: React.ReactNode,
  style?: CSSProperties,
  kind?: ButtonKind,
};

const Button = (props: ButtonProps): React.ReactElement => {
  const {
    children,
    className = '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onClick = (): void => {},
    disabled = false,
    title = undefined,
    startEnhancer = null,
    style = {},
    kind = BUTTON_KIND_PRIMARY,
  } = props;

  const defaultClasses = ' transition duration-200 ease-in-out flex flex-row items-center uppercase font-medium text-xs tracking-wider';

  const disabledClasses: Record<ButtonKind, string> = {
    [BUTTON_KIND_PRIMARY]: 'cursor-not-allowed bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-500 dark:hover:text-gray-400 border-gray-300 dark:border-gray-600',
    [BUTTON_KIND_SECONDARY]: 'cursor-not-allowed bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-500 dark:hover:text-gray-400 border-gray-300 dark:border-gray-600',
  };

  const kindClasses: Record<ButtonKind, string> = {
    [BUTTON_KIND_PRIMARY]: 'hover:bg-white dark:hover:bg-gray-700 hover:text-black dark:hover:text-white py-2 px-3 rounded shadow-sm border border-solid border-white dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-black dark:bg-gray-800 text-white dark:text-gray-100',
    [BUTTON_KIND_SECONDARY]: 'bg-white dark:bg-gray-800 text-black dark:text-gray-100 py-2 px-3 rounded shadow-sm border border-solid hover:border-white dark:hover:border-gray-600 border-gray-400 dark:border-gray-600 hover:bg-black dark:hover:bg-gray-700 hover:text-white',
  };

  const classes = `${defaultClasses} ${kindClasses[kind]} ${disabled ? disabledClasses[kind] : ''} ${className}`;

  const separator = startEnhancer ? (
    <span className="w-2" />
  ) : null;

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
      disabled={disabled}
      title={title}
      style={style}
    >
      {startEnhancer}
      {separator}
      {children}
    </button>
  );
};

export default Button;
