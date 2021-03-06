import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.scss']
})
export class StatusLabelComponent {
  @Input() statusType: string = null;
  @Input() description: string = null;

  showTooltip: boolean;
  public get computedClasses(): string {
    // Angular explodes once the given classes string can't be split by spaces nicely. Thank you Angular.
    return (
      `status-badge ${this.getStatusClass(this.statusType)}`.trim() +
      `${this.description ? ' has-tooltip' : ''}`
    ).trim();
  }

  public getStatusClass = (type?: string) => {
    if (!type) {
      return '';
    }

    switch (type.toUpperCase()) {
      case 'INITIAL':
      case 'INFO':
        return 'status-badge--info';
      case 'OK':
      case 'READY':
      case 'RUNNING':
      case 'SUCCESS':
      case 'SUCCEEDED':
        return 'status-badge--success';

      case 'UNKNOWN':
      case 'WARNING':
      case 'TERMINATING':
        return 'status-badge--warning';

      case 'FAILED':
      case 'ERROR':
      case 'FAILURE':
        return 'status-badge--error';

      default:
        return '';
    }
  };
}
