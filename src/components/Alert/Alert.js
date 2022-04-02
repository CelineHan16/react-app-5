import "./Alert.css";

function Alert({ light, dark, warning, info, primary, secondary, success, danger, children }) {
  const className = ["Alert"];
  if (success) {
    className.push('success');
  }
  if (danger) {
    className.push('danger');
  }
  if (secondary) {
    className.push('secondary');
  }
  if (primary) {
    className.push('primary');
  }
  if (warning) {
    className.push('warning');
  }
  if (info) {
    className.push('info');
  }
  if (light) {
    className.push('light');
  }
  if (dark) {
    className.push('dark');
  }
  return <div className={className.join(' ')}>{children}</div>
}

export default Alert;